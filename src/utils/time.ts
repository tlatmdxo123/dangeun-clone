export const timeFromNow = (date:Date) => {
    const current = new Date()

    const year = current.getFullYear() - date.getFullYear()
    const month = current.getMonth() - date.getMonth()
    const day = current.getDate() - date.getDate()
    const hour = current.getHours() - date.getHours()
    const minute = current.getMinutes() - date.getMinutes()
    const seconds = current.getSeconds() - date.getSeconds()

    return year > 0 ? `${year}년전` 
        : month > 0 ? `${month}개월전`
        : day > 0 ? `${day}일전`
        : hour > 0 ? `${hour}시간전`
        : minute > 0 ? `${minute}분전`
        : `${seconds}초전`
}