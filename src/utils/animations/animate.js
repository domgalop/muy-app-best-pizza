export const bounceUp = {
    targets:  '.select__page',
    translateY: {
        duration: 800,
        easing:'linear',
        value: ['-800px', '0px']
    }
};

export const iconMove = {
    targets: '.fab',
    translateX: 0,
    borderRadius: 30,
    rotate: {
      value: 360,
      duration: 700,
      easing: 'linear'
    },
    direction: 'alternate',
    loop: true
};

export const waveButton = {
    targets: '.login_button',
    direction: 'alternate',
    height: 50,
    duration: 500,
    delay: 500,
    easing: 'linear',
};