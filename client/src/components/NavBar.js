import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserSecret as TrenchcoatIcon } from '@fortawesome/free-solid-svg-icons';

export default function NavBar() {
  return (
    <nav className="flex justify-between p-6 bg-gray-500">
      <div className="flex text-4xl">
        <FontAwesomeIcon icon={TrenchcoatIcon} />
        <h1 className="font-title align-text-bottom ml-3 text-4xl">
          TrenchCoat
        </h1>
      </div>
      <ul className="flex space-x-4 ">
        <li className="flex-1">
          <a href="">A Link</a>
        </li>
        <li className="flex-1">
          <a href="">A Link</a>
        </li>
      </ul>
    </nav>
  );
}
