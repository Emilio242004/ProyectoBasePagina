import { useState } from 'react';
import { FiLock, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function Register() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signup API call here
    console.log({ name, password });
};
    return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-verdeHoja">
        Crear cuenta
        </h2>
    </div>

    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
        <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nombre de usuario
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiUser className="h-5 w-5 text-gray-400" />
                </div>
                <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="focus:ring-verdeHoja focus:border-verdeHoja block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-2 border"
                />
            </div>
            </div>

            <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Contraseña
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiLock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="focus:ring-verdeHoja focus:border-verdeHoja block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-2 border"
                />
            </div>
            <p className="mt-2 text-sm text-gray-500">
                Mínimo 8 caracteres con números y símbolos.
            </p>
            </div>

            <div>
            <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-verdeHoja hover:bg-verdeMedio focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-verdeHoja"
            >
                Registrarme
            </button>
            </div>
        </form>

        <div className="mt-6">
            <div className="relative">
            <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                ¿Ya tienes cuenta?
                </span>
            </div>
            </div>

            <div className="mt-6">
            <Link
                to="/login"
                className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-verdeHoja"
            >
                Iniciar sesión
            </Link>
            </div>
        </div>
        </div>
    </div>
    </div>
);
}