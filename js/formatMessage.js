function formatMessage(message, maxLength) {
    const messageControl =
        message.lenght() > maxLength
            ? `${message.slice(0, maxLength)}...`
            : `${message}`
    return messageControl
}
