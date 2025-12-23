function newyear () {
  const now = new Date();
  const m = now.getMonth();  // 0=янв ... 11=дек
  const d = now.getDate();   // 1..31
  const inSeason = (m === 11 && d >= 15) || (m === 0 && d <= 15);
  if (!inSeason) return;

 const path = `${window.location.origin}/wp-content/themes/chatc/assets/audio/`;
  const sounds = Array.from({ length: 36 }, (_, i) => `${path}sound${i + 1}.mp3`);

  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  const context = new AudioCtx();

  let bufferList = [];
  let loaded = false;
  let preset = 0;
  let loadingStarted = false;

  function loadAllSounds() {
    if (loadingStarted) return;
    loadingStarted = true;

    const promises = sounds.map((url, index) =>
      fetch(url)
        .then(res => res.arrayBuffer())
        .then(data => context.decodeAudioData(data))
        .then(buffer => {
          bufferList[index] = buffer;
        })
    );

    Promise.all(promises).then(() => {
      loaded = true;
     // console.log('✅ All sounds loaded!');
    }).catch(err => {
    //  console.error('❌ Sound loading failed:', err);
      loaded = true; // разблокируем анимацию
    });
  }

  function playSound(index) {
    if (!loaded || !bufferList[index]) return;

    const source = context.createBufferSource();
    const gainNode = context.createGain();
    source.buffer = bufferList[index];
    source.connect(gainNode);
    gainNode.connect(context.destination);
    gainNode.gain.setValueAtTime(1, context.currentTime);
    source.start(context.currentTime);

    const stopTime = context.currentTime + 1;
    gainNode.gain.exponentialRampToValueAtTime(0.1, stopTime);
    source.stop(stopTime);

    return { source, gainNode };
  }

  // ✅ ИСПРАВЛЕНА АНИМАЦИЯ — классы на ПРАВИЛЬНЫХ элементах
  function ballBounce(ballElement) {
    // Проверяем, что элемент существует и не анимируется
    if (!ballElement || ballElement.classList.contains('bounce')) return;

    // Добавляем классы НА САМ ЭЛЕМЕНТ .b-ball_bounce
    ballElement.classList.add('bounce');
    
    setTimeout(() => {
      ballElement.classList.remove('bounce');
      ballElement.classList.add('bounce1');
      setTimeout(() => {
        ballElement.classList.remove('bounce1');
        ballElement.classList.add('bounce2');
        setTimeout(() => {
          ballElement.classList.remove('bounce2');
          ballElement.classList.add('bounce3');
          setTimeout(() => {
            ballElement.classList.remove('bounce3');
          }, 300);
        }, 300);
      }, 300);
    }, 300);
  }

  // ✅ Находим ВСЕ элементы с классом .b-ball_bounce
  const buttons = document.querySelectorAll('.b-ball_bounce');

  buttons.forEach((btn, i) => {
    // Устанавливаем data-note
    btn.dataset.note = i;
    //console.log(`Ball ${i}:`, btn); // дебаж

    btn.addEventListener('mouseenter', function () {
      loadAllSounds(); // звук в фоне
      
      const index = parseInt(this.dataset.note, 10) + preset;
      playSound(index); // звук когда готов
      
      ballBounce(this); // ✅ анимация СРАЗУ
    });
  });

  const keyMapMain = [
    '49','50','51','52','53','54','55','56','57','48',
    '189','187','81','87','69','82','84','89','85','73',
    '79','80','219','221','65','83','68','70','71','72',
    '74','75','76','186','222','220'
  ];
  const keyMapExtra = ['90','88','67','86','66','78','77','188','190','191'];

  const keyToIndex = {};
  keyMapMain.forEach((code, i) => { keyToIndex[code] = i; });
  keyMapExtra.forEach((code, i) => { keyToIndex[code] = i; });

  document.addEventListener('keydown', e => {
    const code = String(e.which || e.keyCode);
    if (!(code in keyToIndex)) return;

    loadAllSounds();
    const index = keyToIndex[code];
    playSound(index);
    
    const ball = document.querySelector(`[data-note="${index}"]`);
    if (ball) ballBounce(ball);
  });
}

export default newyear;
