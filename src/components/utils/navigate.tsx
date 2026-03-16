export function Navigate({ to }: { to: string }) {
    window.location.href = to;

    return null
}