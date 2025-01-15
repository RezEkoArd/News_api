export default function Footer() {
    const date = new Date();

    return (
        <footer className="py-5 lg:py-8 mt-10 border-t border-gray-100">
            <div className="text-center text-sm">
                Copyright @ {date.getFullYear()}.
            </div>
        </footer>
    );
}