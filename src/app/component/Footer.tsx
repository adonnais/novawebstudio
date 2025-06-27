type FooterData = {
  descripcion: string;
  enlaces_rapidos: { nombre: string; url: string }[];
  redes: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
  copyright: string;
};

export default function Footer({ data }: { data: FooterData }) {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 md:px-16 w-full">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Descripción */}
        <div>
          <h3 className="text-2xl font-bold mb-3">Nova Web Studio</h3>
          <p className="text-gray-400">{data.descripcion}</p>
        </div>

        {/* Enlaces Rápidos */}
        <div>
          <h4 className="text-xl font-semibold mb-3">Enlaces Rápidos</h4>
          <ul className="space-y-2">
            {data.enlaces_rapidos.map((enlace, idx) => (
              <li key={idx}>
                <a
                  href={enlace.url}
                  className="hover:text-blue-400 transition-colors"
                >
                  {enlace.nombre}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Redes Sociales */}
        <div>
          <h4 className="text-xl font-semibold mb-3">Síguenos</h4>
          <div className="flex space-x-4">
            {data.redes.facebook && (
              <a href={data.redes.facebook} target="_blank" rel="noopener noreferrer">
                <span className="hover:text-blue-500">Facebook</span>
              </a>
            )}
            {data.redes.instagram && (
              <a href={data.redes.instagram} target="_blank" rel="noopener noreferrer">
                <span className="hover:text-pink-400">Instagram</span>
              </a>
            )}
            {data.redes.linkedin && (
              <a href={data.redes.linkedin} target="_blank" rel="noopener noreferrer">
                <span className="hover:text-blue-300">LinkedIn</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-sm text-gray-500">
        {data.copyright}
      </div>
    </footer>
  );
}
