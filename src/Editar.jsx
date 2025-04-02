import { useState } from 'react';
import { FiEdit, FiSave, FiTrash2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function Editar() {
  // Sample data - replace with actual data from your API/state
    const [formData, setFormData] = useState({
    nombre: 'Panthera leo',
    endemismo: 'África subsahariana',
    riesgo: 'vulnerable',
    alimentacion: 'carnivoro',
    reproduccion: 'sexual',
    habitat: 'Sabana y pastizales',
    reino: 'animalia',
    descripcion: 'El león es un felino social que vive en manadas. Los machos tienen melena característica.',
    imagen: 'https://via.placeholder.com/800x400?text=León+Africano'
});

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
};

    const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos actualizados:', formData);
    // Add your API update logic here
};

    const handleDelete = () => {
    if (window.confirm('¿Estás seguro de eliminar esta especie?')) {
    console.log('Especie eliminada');
      // Add your delete API call here
    }
};

    return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
          {/* Header */}
        <div className="bg-verdeHoja px-6 py-4 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <FiEdit className="inline" /> Editar Especie
            </h2>
            <button
            onClick={handleDelete}
            className="text-red-100 hover:text-white flex items-center gap-1"
            >
            <FiTrash2 className="w-5 h-5" /> Eliminar
            </button>
        </div>

          {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Columna 1 */}
            <div className="space-y-6">
              {/* Nombre */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre común *
                </label>
                <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                className="focus:ring-verdeHoja focus:border-verdeHoja block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 border"
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
                required
                />
            </div>

              {/* Imagen */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                Imagen actual
                </label>
                <div className="flex items-center gap-4">
                <img
                    src={formData.imagen}
                    alt="Preview"
                    className="w-16 h-16 object-cover rounded-md"
                />
                <label className="cursor-pointer text-sm text-verdeHoja hover:text-verdeMedio">
                    Cambiar imagen
                    <input type="file" className="hidden" />
                </label>
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
                required
            />
            </div>

            {/* Botones */}
            <div className="md:col-span-2 flex justify-end gap-4 pt-4 border-t border-gray-200">
            <Link
                to="/visualizar"
                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
                Cancelar
            </Link>
            <button
                type="submit"
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-verdeHoja hover:bg-verdeMedio focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-verdeHoja flex items-center gap-2"
            >
                <FiSave /> Guardar Cambios
            </button>
            </div>
        </form>
        </div>
    </div>
    </div>
);
}