import { useState, useEffect } from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import ContactTable from "../components/ContactTable";
import Pagination from "../components/Pagination";
import ContactModal from "../components/ContactModal";
import ContactForm from "../components/ContactForm";
import ViewContact from "../components/ViewContact";
import ConfirmDelete from "../components/ConfirmDelete";
import contactData from "../data/contacts";


function ContactList() {

  //To control add contact
  const [contacts, setContacts] = useState(contactData);
// To control search type
  const [search, setSearch] = useState("");
  const [searchType, setSearchType] = useState("name");
//To control department
  const [department, setDepartment] = useState("");
  const [status, setStatus] = useState("");

//To sort alphabhet order
  const [sort, setSort] = useState("");
//For pagination
  const [currentPage, setCurrentPage] = useState(1);
 const contactsPerPage = 10;


  // Modal
  const [selectedContact, setSelectedContact] = useState(null);
  const [modal, setModal] = useState(null);


  function openModal(type, contact = null) {
    setSelectedContact(contact);
    setModal(type);
  }


  function closeModal() {
    setModal(null);
    setSelectedContact(null);
  }


  // CRUD

  function addContact(data) {

    const newId =
      Math.max(...contacts.map(contact => contact.id)) + 1;

    const newContact = {
      ...data,
      id: newId
    };

    setContacts(prev => [
      ...prev,
      newContact
    ]);

    closeModal();
  }


  function updateContact(data) {

    setContacts(prev =>
      prev.map(contact =>
        contact.id === data.id
          ? data
          : contact
      )
    );

    closeModal();
  }


  function deleteContact(id) {

    setContacts(prev =>
      prev.filter(contact =>
        contact.id !== id
      )
    );

    closeModal();
  }



  // Filtering

  const filteredContacts = contacts.filter(contact => {

    let matchesSearch = true;


    if(search) {

      const value = search.toLowerCase();

      if(searchType === "name") {
        matchesSearch =
          contact.name
          .toLowerCase()
          .includes(value);
      }

      if(searchType === "email") {
        matchesSearch =
          contact.email
          .toLowerCase()
          .includes(value);
      }

      if(searchType === "phone") {
        matchesSearch =
          contact.phone
          .includes(search);
      }

      if(searchType === "id") {
        matchesSearch =
          contact.id
          .toString()
          .includes(search);
      }

    }


    const matchesDepartment =
      department === "" ||
      contact.department === department;


    const matchesStatus =
      status === "" ||
      contact.status === status;


    return (
      matchesSearch &&
      matchesDepartment &&
      matchesStatus
    );

  });



  // Sorting

  const sortedContacts = [...filteredContacts];


  if(sort === "asc") {
    sortedContacts.sort((a,b) =>
      a.name.localeCompare(b.name)
    );
  }


  if(sort === "desc") {
    sortedContacts.sort((a,b) =>
      b.name.localeCompare(a.name)
    );
  }



  // Pagination

  const totalPages = Math.ceil(
    sortedContacts.length / contactsPerPage
  );


  const startIndex =
    (currentPage - 1) * contactsPerPage;


  const paginatedContacts =
    sortedContacts.slice(
      startIndex,
      startIndex + contactsPerPage
    );



  // Reset page

  useEffect(() => {
    setCurrentPage(1);
  }, [
    search,
    searchType,
    department,
    status,
    sort
  ]);



  return (
    <div className="min-h-screen bg-gray-100">
    <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">

        <Header onAddContact={() => openModal("add")}/>


        <div className="bg-white p-4 md:p-6 rounded-xl shadow mb-6">

         <div className="flex flex-col gap-4 lg:flex-row">

            <SearchBar
              search={search}
              setSearch={setSearch}
              searchType={searchType}
              setSearchType={setSearchType}
            />


            <FilterBar
              department={department}
              setDepartment={setDepartment}
              status={status}
              setStatus={setStatus}
              sort={sort}
              setSort={setSort}
            />

          </div>

        </div>



        <ContactTable contacts={paginatedContacts} onView={(contact) =>
            openModal("view", contact)
          }
          onEdit={(contact) =>
            openModal("edit", contact)
          }
          onDelete={(contact) =>
            openModal("delete", contact)
          }
        />



        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />



        {/* Add Contact */}

        <ContactModal
          isOpen={modal === "add"}
          title="Add Contact"
          onClose={closeModal}
        >

          <ContactForm
            onSubmit={addContact}
            onCancel={closeModal}
          />

        </ContactModal>



        {/* Edit Contact */}

        <ContactModal
          isOpen={modal === "edit"}
          title="Edit Contact"
          onClose={closeModal}
        >

          <ContactForm
            initialData={selectedContact}
            onSubmit={updateContact}
            onCancel={closeModal}
          />

        </ContactModal>



        {/* View Contact */}

        <ContactModal
          isOpen={modal === "view"}
          title="Contact Details"
          onClose={closeModal}
        >

          <ViewContact
            contact={selectedContact}
          />

        </ContactModal>



        {/* Delete Contact */}

        <ContactModal
          isOpen={modal === "delete"}
          title="Delete Contact"
          onClose={closeModal}
        >

    <ConfirmDelete contact={selectedContact} onConfirm={deleteContact} onCancel={closeModal}/>

        </ContactModal>


      </div>

    </div>
  );
}


export default ContactList;