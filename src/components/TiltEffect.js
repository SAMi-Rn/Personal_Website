function addTiltEffect(button) {
  button.onmousemove = function (e) {
    const rect = button.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    const tiltIntensity = 30;
    
    const xTilt = tiltIntensity * x;
    const yTilt = -tiltIntensity * y; 

    button.style.transform = `perspective(500px) rotateX(${yTilt}deg) rotateY(${xTilt}deg)`;
  };

  button.onmouseleave = function () {
    button.style.transition = 'transform 2.5s';
    button.style.transform = 'perspective(500px) rotateX(0deg) rotateY(0deg)';
  };

  button.onmouseenter = function () {
    button.style.transition = '';
  };
}

export default addTiltEffect;
