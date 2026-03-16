const Navigate = ({ to }: { to: string }) => {
    window.location.href = to;

    return null
}

export { Navigate };