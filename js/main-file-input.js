
	//Input field (repairs-form)
	let fields = document.querySelectorAll('.repairs-form__input-field');
    Array.prototype.forEach.call(fields, function (input) {
      let label = input.nextElementSibling,
        labelVal = label.querySelector('.repairs-form__input-field-fake > p').innerText;
 
      input.addEventListener('change', function (e) {
        let countFiles = '';
        if (this.files && this.files.length >= 1)
          countFiles = this.files.length;
 
        if (countFiles)
          label.querySelector('.repairs-form__input-field-fake > p').innerText = 'Выбрано файлов: ' + countFiles;
        else
          label.querySelector('.repairs-form__input-field-fake > p').innerText = labelVal;
      });
    });