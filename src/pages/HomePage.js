import ContactList from '../components/ContactList/ContactList';
import Header from '../components/Header/Header';
import SideBar from '../components/SideBar/SideBar';

export default function HomePage() {
  return (
    <div>
      <Header />
      <div className="mainPage">
        <ContactList />
      </div>
    </div>
  );
}
