import { useState } from 'react';
import { FiPlusCircle, FiSave } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function Agregar() {
    const [formData, setFormData] = useState({
    nombre: '',
    endemismo: '',
    riesgo: 'no evaluado',
    alimentacion: '',
    reproduccion: '',
    habitat: '',
    reino: 'animalia',
    descripcion: ''
});

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
};

    const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos enviados:', formData);
    // Add your API submission logic here
};

    return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
          {/* Header */}
        <div className="bg-verdeHoja px-6 py-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <FiPlusCircle className="inline" /> Agregar Nueva Especie
            </h2>
        </div>

          {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Columna 1 */}
            <div className="space-y-6">
              {/* Nombre */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre científico *
                </label>
                <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                className="focus:ring-verdeHoja focus:border-verdeHoja block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 border"
                placeholder="Ej: Panthera leo"
                required
                />
            </div>

              {/* Reino */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Reino *
                </label>
                <select
                name="reino"
                value={formData.reino}
                onChange={handleChange}
                className="focus:ring-verdeHoja focus:border-verdeHoja block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 border"
                required
                >
                <option value="animalia">Animalia</option>
                <option value="plantae">Plantae</option>
                <option value="fungi">Fungi</option>
                <option value="protista">Protista</option>
                <option value="monera">Monera</option>
                </select>
            </div>

              {/* Endemismo */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Endemismo *
                </label>
                <input
                type="text"
                name="endemismo"
                value={formData.endemismo}
                onChange={handleChange}
                className="focus:ring-verdeHoja focus:border-verdeHoja block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 border"
                placeholder="Ej: Endémico de Madagascar"
                required
                />
            </div>

              {/* Riesgo */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Estado de conservación *
                </label>
                <select
                name="riesgo"
                value={formData.riesgo}
                onChange={handleChange}
                className="focus:ring-verdeHoja focus:border-verdeHoja block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 border"
                required
                >
                <option value="no evaluado">No evaluado</option>
                <option value="preocupacion menor">Preocupación menor</option>
                <option value="vulnerable">Vulnerable</option>
                <option value="en peligro">En peligro</option>
                <option value="en peligro critico">En peligro crítico</option>
                <option value="extinto">Extinto en estado silvestre</option>
                </select>
            </div>
            </div>

            {/* Columna 2 */}
            <div className="space-y-6">
              {/* Alimentación */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Alimentación *
                </label>
                <select
                name="alimentacion"
                value={formData.alimentacion}
                onChange={handleChange}
                className="focus:ring-verdeHoja focus:border-verdeHoja block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 border"
                required
                >
                <option value="">Seleccionar...</option>
                <option value="carnivoro">Carnívoro</option>
                <option value="herbivoro">Herbívoro</option>
                <option value="omnivoro">Omnívoro</option>
                <option value="insectivoro">Insectívoro</option>
                <option value="fotosintesis">Fotosíntesis (plantas)</option>
                </select>
            </div>

              {/* Reproducción */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tipo de reproducción *
                </label>
                <select
                name="reproduccion"
                value={formData.reproduccion}
                onChange={handleChange}
                className="focus:ring-verdeHoja focus:border-verdeHoja block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 border"
                required
                >
                <option value="">Seleccionar...</option>
                <option value="sexual">Sexual</option>
                <option value="asexual">Asexual</option>
                <option value="ambas">Ambas</option>
                </select>
            </div>

              {/* Hábitat */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Hábitat principal *
                </label>
                <input
                type="text"
                name="habitat"
                value={formData.habitat}
                onChange={handleChange}
                className="focus:ring-verdeHoja focus:border-verdeHoja block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 border"
                placeholder="Ej: Selva tropical, desierto..."
                required
                />
            </div>

              {/* Imagen */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                Imagen (opcional)
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                    <div className="flex text-sm text-gray-600">
                    <label className="relative cursor-pointer bg-white rounded-md font-medium text-verdeHoja hover:text-verdeMedio focus-within:outline-none">
                        <span>Subir archivo</span>
                        <input type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">o arrastrar aquí</p>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG hasta 10MB</p>
                </div>
                </div>
            </div>
            </div>

            {/* Descripción (full width) */}
            <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
                Descripción detallada *
            </label>
            <textarea
                rows={4}
                name="descripcion"
                value={formData.descripcion}
                onChange={handleChange}
                className="focus:ring-verdeHoja focus:border-verdeHoja block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 border"
                placeholder="Características físicas, comportamiento, curiosidades..."
                required
            />
            </div>

            {/* Botones */}
            <div className="md:col-span-2 flex justify-end gap-4 pt-4 border-t border-gray-200">
            <Link
                to="/"
                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
                Cancelar
            </Link>
            <button
                type="submit"
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-verdeHoja hover:bg-verdeMedio focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-verdeHoja flex items-center gap-2"
            >
                <FiSave /> Guardar Especie
            </button>
            </div>
        </form>
        </div>
    </div>
    </div>
);
}