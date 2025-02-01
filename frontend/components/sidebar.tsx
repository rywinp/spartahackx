export default async function Sidebar() {
    return (
            <div className="h-screen w-[250px] bg-gray-100 border-r border-gray-300 overflow-y-auto p-5">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Hello</h1>
            
            <nav className="space-y-2">
                <a href="#" className="block px-3 py-2 text-gray-600 hover:bg-gray-200 rounded transition-colors">
                    Dashboard
                </a>
                <a href="#" className="block px-3 py-2 text-gray-600 hover:bg-gray-200 rounded transition-colors">
                    Settings
                </a>
                <a href="#" className="block px-3 py-2 text-gray-600 hover:bg-gray-200 rounded transition-colors">
                    Profile
                </a>
                <a href="#" className="block px-3 py-2 text-gray-600 hover:bg-gray-200 rounded transition-colors">
                    Messages
                </a>
            </nav>
        </div>
    );
}