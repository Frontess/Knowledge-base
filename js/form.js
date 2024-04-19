let selector = document.querySelector("input[type='tel']");
let im = new Inputmask("+7(999)999-99-99");
im.mask(selector);

new JustValidate('.form', {
  rules: {
    name: {
      required: true,
      minLenght: 2,
      maxLenght: 30
    },
    email: {
      required: true,
      email: true,
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.Inputmask.unmaskedvalue()
        return Numder(phone) && phone.legth === 10
      }
    },
  },
  messages: {
    email: {
      required: 'Вы не ввели e-mail',
    },
    tel: {
      required: 'Вы не ввели телефон',
    },
    name: {
      required: 'Вы не ввели имя',
    }
  },
  colorWrong: '#FF5C00',
});


