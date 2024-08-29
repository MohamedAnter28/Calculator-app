document.addEventListener('DOMContentLoaded', () => {
  const calcInput = document.getElementById('calcInput');
  const buttons = Array.from(document.querySelectorAll('.btn'));

  let currentInput = '';

  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      const buttonText = e.target.innerText;

      if (buttonText === 'RESET') {
        currentInput = '';
        calcInput.value = '';
      } else if (buttonText === 'DEL') {
        currentInput = currentInput.slice(0, -1);
        calcInput.value = currentInput;
      } else if (buttonText === '=') {
        try {
          const expression = currentInput.replace(/x/g, '*');
          const result = math.evaluate(expression);
          calcInput.value = result;
          currentInput = result.toString();
        } catch (error) {
          calcInput.value = 'Error';
          currentInput = '';
        }
      } else {
        currentInput += buttonText;
        calcInput.value = currentInput;
      }
    });
  });
});


const bullet = document.querySelector('.bullet');

let theme = 1;



function changeTheme() {
  theme = (theme % 3) + 1;
  if (theme === 1) {
    document.querySelector('body').style =
      'background-color: var(--main-background)';
    document.querySelector('.heading label').style.cssText =
      'color: var(--White)';
    document.querySelector('.heading div p').style.cssText =
      'color: var(--White)';
    document
      .querySelectorAll('.heading .toggle-container div span')
      .forEach((span) => {
        span.style.cssText = 'color: var(--White)';
      });
    document.querySelector('#calcInput').style.cssText =
      'background-color: var(--screen-background); color: var(--White);';
    document.querySelector('.keypad').style.cssText =
      'background-color: var(--toggle-or-keypad-background)';
    document.querySelectorAll('.btn').forEach((btn) => {
      btn.style.cssText =
        'background-color:var(--White); box-shadow: 0 3px 3px var(--theme2-nums-shadow); color: var(--nums-color)';
    });
    document.querySelector('.del').style.cssText =
      'background-color: hsl(222deg 62.43% 73.17%); box-shadow: 0 3px 3px var(--main-background) ';
    document.querySelector('.reset').style.cssText =
      'background-color: hsl(222deg 62.43% 73.17%); box-shadow: 0 3px 3px var(--main-background)';
    document.querySelector('.calc').style.cssText =
      'background-color: hsl(6deg 100% 66.89%);  box-shadow: 0 3px 3px var(--calc-or-bullet-background);';
    document.querySelector('.toggle').style.cssText =
      'background-color: var(--toggle-or-keypad-background)';
    document.querySelector('.bullet').style.cssText =
      'background-color: var(--calc-or-bullet-background); left: 3.5px;';
  } else if (theme === 2) {
    document.querySelector('body').style =
      'background-color: var(--theme2-main-background)';
    document.querySelector('.heading label').style.cssText =
      'color: var(--theme2-color)';
    document.querySelector('.heading div p').style.cssText =
      'color: var(--theme2-color)';
    document
      .querySelectorAll('.heading .toggle-container div span')
      .forEach((span) => {
        span.style.cssText = 'color: var(--theme2-color)';
      });
    document.querySelector('#calcInput').style.cssText =
      'background-color: var(--theme2-screen-background); color: var(--theme2-color);';
    document.querySelector('.keypad').style.cssText =
      'background-color: var(--theme2-toggle-background-or-keypad-background)';
    document.querySelectorAll('.btn').forEach((btn) => {
      btn.style.cssText =
        'background-color:var(--theme2-nums-background); box-shadow: 0 3px 3px var(--theme2-nums-shadow); color: var(--theme2-color)';
    });
    document.querySelector('.del').style.cssText =
      'background-color: var(--theme2-reset-background); box-shadow: 0 3px 3px var(--theme2-reset-shadow) ';
    document.querySelector('.reset').style.cssText =
      'background-color: var(--theme2-reset-background); box-shadow: 0 3px 3px var(--theme2-reset-shadow)';
    document.querySelector('.calc').style.cssText =
      'background-color: var(--theme2-calc-background-or-toggle);  box-shadow: 0 3px 3px var(--theme2-calc-shadow);';
    document.querySelector('.toggle').style.cssText =
      'background-color: var(--theme2-toggle-background-or-keypad-background)';
    document.querySelector('.bullet').style.cssText =
      'background-color: var(--theme2-calc-background-or-toggle); left: 21.5px;';
  } else if (theme === 3) {
    document.querySelector('body').style =
      'background-color: var(--theme3-main-background)';
    document.querySelector('.heading label').style.cssText =
      'color: var(--theme3-nums-color)';
    document.querySelector('.heading div p').style.cssText =
      'color: var(--theme3-nums-color)';
    document
      .querySelectorAll('.heading .toggle-container div span')
      .forEach((span) => {
        span.style.cssText = 'color: var(--theme3-nums-color)';
      });
    document.querySelector('#calcInput').style.cssText =
      'background-color: var(--theme3-toggle-background-or-keypad-background-or-screen-background); color: var(--theme3-nums-color);';
    document.querySelector('.keypad').style.cssText =
      'background-color: var(--theme3-toggle-background-or-keypad-background-or-screen-background)';
    document.querySelectorAll('.btn').forEach((btn) => {
      btn.style.cssText =
        'background-color:var(--theme3-nums-background); box-shadow: 0 3px 3px var(--theme3-nums-shadow); color: var(--theme3-nums-color)';
    });
    document.querySelector('.del').style.cssText =
      'background-color: var(--theme3-reset-background); box-shadow: 0 3px 3px var(--theme3-reset-shadow)';
    document.querySelector('.reset').style.cssText =
      'background-color: var(--theme3-reset-background); box-shadow: 0 3px 3px var(--theme3-reset-shadow)';
    document.querySelector('.calc').style.cssText =
      'background-color: var(--theme3-calc-background-or-toggle);  box-shadow: 0 3px 3px var(--theme3-calc-shadow);';
    document.querySelector('.toggle').style.cssText =
      'background-color: var(--theme3-toggle-background-or-keypad-background-or-screen-background)';
    document.querySelector('.bullet').style.cssText =
      'background-color: var(--theme3-calc-background-or-toggle); left: 43.5px;';
  }
  if (theme === 4) {
    theme === 1;
  }
}

bullet.addEventListener('click', (e) => {
  e.preventDefault();
  changeTheme();
});
