export function validaCelular(value: string) {
  if (!value || value === '') return null;

  if (
    value.match(
      /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/
    )
  ) {
    return true;
  } else return false;
}

// ========================= REGEX DE TELEFONE 9 DIGITOS =======================

export function telMask(value: string) {
  const ddi = value?.slice(0, 2);

  if (ddi === '55') {
    const tel = value?.slice(0).slice(2);

    return tel?.replace(/^([\d]{2})([\d]{5})([\d]{4})$/, '($1) $2-$3');
  } else {
    return value?.replace(/^([\d]{2})([\d]{5})([\d]{4})$/, '($1) $2-$3');
  }
}

// ========================= COLOCAR PRIMEIRA LETRA DOS NOMES EM UPPERCASE =======================

export function capitalizedReturn(value: string) {
  return value?.charAt(0).toUpperCase() + value?.slice(1);
}

export function nomesIniciaisMaiusculas(value: string) {
  if (!value || value === '') return null;

  let result;
  let minusculas = value.toLowerCase();

  if (minusculas.split(' ').length === 1) {
    result = capitalizedReturn(minusculas);
  } else if (minusculas.split(' ').length > 1) {
    result = minusculas.split(' ').map((item) => {
      if (
        item === 'de' ||
        item === 'da' ||
        item === 'das' ||
        item === 'dos' ||
        item === 'e'
      ) {
        return item;
      } else {
        return capitalizedReturn(item);
      }
    });
    result = result.join(' ');
  }

  return result;
}
// ========================= VALIDAR EMAIL =======================

export function validateEmail(email: string) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

// ========================= APENAS NUMEROS NO INPUT =======================

export function onlyNumber(e: any) {
  let theEvent = e;
  let key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode(key);
  let regex = /^(\d*\.)?\d+$/;
  if (!regex.test(key)) {
    theEvent.returnValue = false;
    if (theEvent.preventDefault) theEvent.preventDefault();
  }
  //  onKeyPress={onlyNumber}  //COLOCAR ESSE CÓD NO INPUT
}
