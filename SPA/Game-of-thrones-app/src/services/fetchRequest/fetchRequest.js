
const getResource = async (url) => {
    // делаем асинхронный запрос на сервер
    const res = await fetch(url)
    // получаем асинхронный ответ и преобразуем в json

    return await res.json()
}

export default getResource;