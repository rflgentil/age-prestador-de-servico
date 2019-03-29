const validCPF = function (value) {
    let cpf = value
    cpf = cpf.replace(/[^\d]+/g, '')

    if (cpf === '') return false

    if (cpf.length !== 11) return false

    if (/(0{11}|1{11}|2{11}|3{11}|4{11}|5{11}|6{11}|7{11}|8{11}|9{11})/.test(cpf)) return false

    var add = 0
    for (let i = 0; i < 9; i++) {
        add += parseInt(cpf.charAt(i)) * (10 - i)
    }

    let rev = 11 - (add % 11)
    if (rev === 10 || rev === 11) rev = 0
    if (rev !== parseInt(cpf.charAt(9))) return false

    add = 0
    for (let i = 0; i < 10; i++) {
        add += parseInt(cpf.charAt(i)) * (11 - i)
    }

    rev = 11 - (add % 11)
    if (rev === 10 || rev === 11) rev = 0
    if (rev !== parseInt(cpf.charAt(10))) return false

    return true
}

const validaCNPJ = function (cnpj) {
    cnpj = cnpj.replace(/[^\d]+/g, '')

    if (cnpj === '') return false

    if (cnpj.length !== 14) return false

    // Elimina CNPJs invalidos conhecidos
    if (cnpj === '00000000000000' ||
        cnpj === '11111111111111' ||
        cnpj === '22222222222222' ||
        cnpj === '33333333333333' ||
        cnpj === '44444444444444' ||
        cnpj === '55555555555555' ||
        cnpj === '66666666666666' ||
        cnpj === '77777777777777' ||
        cnpj === '88888888888888' ||
        cnpj === '99999999999999') return false

    // Valida DVs
    var tamanho = cnpj.length - 2
    var numeros = cnpj.substring(0, tamanho)
    var digitos = cnpj.substring(tamanho)
    var soma = 0
    var pos = tamanho - 7

    for (let i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--
        if (pos < 2) pos = 9
    }

    var resultado = soma % 11 < 2 ? 0 : 11 - soma % 11
    // eslint-disable-next-line
    if (resultado != digitos.charAt(0)) return false

    tamanho = tamanho + 1
    numeros = cnpj.substring(0, tamanho)
    soma = 0
    pos = tamanho - 7
    for (let i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--
        if (pos < 2) pos = 9
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11
    // eslint-disable-next-line
    if (resultado != digitos.charAt(1)) return false

    return true
}

const verificaCpfCnpj = function (value) {
    value = value.toString()
    value = value.replace(/[^0-9]/g, '')

    if (value.length === 11) {
        return 'cpf'
    } else if (value.length === 14) {
        return 'cnpj'
    } else {
        return false
    }
}

export { validCPF, validaCNPJ, verificaCpfCnpj }
