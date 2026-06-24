function formatMessage(mesage, maxLength) {
    return message.length <= maxLength ? message : message.slice(maxLength + "...")
}