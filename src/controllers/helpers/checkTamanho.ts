export const checkTamanho = (content: string, title: string) => {
    if (content) {
        if (content.length > 255 || title.length > 50) {
            return true
        }
    }else{
        if ( title.length > 50) {
            return true
        }
    }

    return false
}