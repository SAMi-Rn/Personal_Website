function addTiltEffect(button) {
  button.onmousemove = function (e) {
    const rect = button.getBoundingClientRect();
    // Normalize the cursor coordinates to get a range from -0.5 to 0.5
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    // Use a multiplier to control the tilt effect intensity
    const tiltIntensity = 30;
    
    // Calculate the tilt angles based on cursor position
    // The "-y" for rotateX is used to get a correct perspective effect (top edge towards the user on upwards movement)
    const xTilt = tiltIntensity * x;
    const yTilt = -tiltIntensity * y; // Notice the negative to correctly invert the axis for a natural effect

    // Apply the tilt effect
    button.style.transform = `perspective(500px) rotateX(${yTilt}deg) rotateY(${xTilt}deg)`;
  };

  button.onmouseleave = function () {
    // Reset the tilt effect with a smooth transition
    button.style.transition = 'transform 2.5s';
    button.style.transform = 'perspective(500px) rotateX(0deg) rotateY(0deg)';
  };

  button.onmouseenter = function () {
    // Remove the transition to have an immediate tilt effect
    button.style.transition = '';
  };
}

export default addTiltEffect;
