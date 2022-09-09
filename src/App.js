import React, { useState } from 'react';
import Header from './components/Header';
import DataCard from './components/DataCard';
import Layout from './components/Layout';
import Frame from './components/Frame';
import ProfileCard from './components/ProfileCard';
import ContentCard from './components/ContentCard';
import Button from './components/Button';
import BookForm from './components/BookForm';
import StoryForm from './components/StoryForm';
import BookList from './components/BookList';
import StoryList from './components/StoryList';
import Login from './components/Login';
import Register from './components/Register';
import { saveItem, getItem } from './utils/storage';

function App() {
  const [user, setUser] = useState(getItem('user'));
  const [guest, setGuest] = useState({});
  const [view, setView] = useState('story');
  const [page, setPage] = useState('login');
  const [books, setBooks] = useState(getItem('books'));
  const [stories, setStories] = useState(getItem('stories'));

  const [bookField, setBookField] = useState('');
  const [bookId, setBookId] = useState('');
  const [storyField, setStoryField] = useState('');
  const [storyId, setStoryId] = useState('');

  const onBookChange = (e) => setBookField(e.target.value);
  const onBookIdChange = (e) => setBookId(e.target.value);
  const onStoryChange = (e) => setStoryField(e.target.value);
   
  const onSubmitBook = () => {
    const catIndex = books.findIndex(item => item.id === bookId);
    if (catIndex === -1) {
      const id = books.length;
      const newBooks = [...books, { id, book: bookField }];
      setBooks(newBooks);
      saveItem('books', newBooks);
    } else {
      const newBooks = JSON.parse(JSON.stringify(books));
      newBooks[catIndex].book = bookField;
      setBooks(newBooks);
      saveItem('books', newBooks);
    }
    setBookField('');
    setBookId('');
    setStoryField('');
  };

  const onSubmitStory = () => {
    const itemIndex = stories.findIndex(item => item.id === storyId);
    if(itemIndex === -1) {
      const id = stories.length;
      const newStories = [ ...stories, { id, bookId, story: storyField } ];
      setStories(newStories);
      saveItem('stories', newStories);
    } else {
      const newStories = JSON.parse(JSON.stringify(stories));
      newStories[itemIndex].bookId = bookId;
      newStories[itemIndex].story = storyField;
      setStories(newStories);
      saveItem('stories', newStories);
    }
    setBookField('');
    setBookId('');
    setStoryField('');
  };

  const onBookForm = () => {
    setView('bForm');
  }

  const onStoryForm = () => {
    setView('sForm');
  }

  const onClose = () => {
    setView('story');
    setBookField('');
    setBookId('');
    setStoryField('');
  }

  const onViewBooks = () => {
    setView('book');
    setBookField('');
    setBookId('');
    setStoryField('');
  }

  const onViewStories = () => {
    setView('story');
    setBookField('');
    setBookId('');
    setStoryField('');
  }

  const onUpdateStory = (item) => {
    setStoryId(item.id);
    setBookId(item.bookId);
    setStoryField(item.story);
    setView('sForm');
  }

  const onUpdateBook = (item) => {
    setBookId(item.id);
    setBookField(item.book);
    setView('bForm');
  }

  const onDeleteBook = (item) => {
    const filterData = books.filter(book => book.id !== item.id);
    setBooks(filterData);
    saveItem('books', filterData);
  }

  const onDeleteStory = (item) => {
    const filterData = stories.filter(story => story.id !== item.id);
    setStories(filterData);
    saveItem('stories', filterData);
  }

  const onLogout = (e) => {
    e.preventDefault();
    user.isLogin = false;
    setUser({...user});
    saveItem('user', {...user});
  }

  const onChangePage = (page) => {
    setPage(page);
  }

  const onHandleGuest = (e) => {
    const {name, value} = e.target;
    setGuest({...guest, [name]: value});
  }

  const onSaveUser = (e) => {
    e.preventDefault()
    if (!validStr(guest.name)) return alert('Name cannot be empty');
    if (!validStr(guest.email)) return alert('Email cannot be empty');
    if (validStr(guest.password).length < 8) return alert('Password must not be less than 8 characters');
    if (validStr(guest.password) !== validStr(guest.confirmPassword)) return alert('Password and confirm password must be the same!');
    setUser({...guest});
    saveItem(`user`, {...guest});
    alert('Register Successfully!');
    onChangePage('login')
  }

  const onLogin = (e) => {
    e.preventDefault();
    if (validStr(guest.email) !== validStr(user.email)) return alert('User not recognize!');
    if (validStr(guest.password) !== validStr(user.password)) return alert('Password does not match!');
    user.isLogin = true;
    setUser({...user});
    saveItem('user', {...user});
    alert('LoggedIn Successfully!');
  }

  const validStr = (str) => {
    return str?.toLowerCase()?.trim();
  }


  if (!user.isLogin && page === 'login') return <Login guest={guest} onHandleGuest={onHandleGuest} onLogin={onLogin} onChangePage={onChangePage} />;
  if (!user.isLogin && page === 'register') return <Register guest={guest} onHandleGuest={onHandleGuest} onSaveUser={onSaveUser} onChangePage={onChangePage} />;
  return (
    <div className="App">
      <Header />
        <Layout>
          <ProfileCard onLogout={onLogout}/>
          <Frame>
            <DataCard title="Books" count={books.length} />
            <DataCard title="Stories" count={stories.length} />
            <ContentCard>
              <Button event={onBookForm}>Create Book</Button>
              <Button event={onStoryForm}>Create Story</Button>
              <div>
                <button onClick={onViewBooks} style={{background: '#f5f5f5', border: 0, color: '#000', padding: '5px 10px', cursor: 'pointer'}}>Books</button>
                <button onClick={onViewStories} style={{background: '#fff', border: 0, color: '#000', padding: '5px 10px', margin: 20, cursor: 'pointer'}}>Story</button>
              </div>
              {view === 'book' && <BookList books={books} onUpdateBook={onUpdateBook} onDeleteBook={onDeleteBook}/>}
              {view === 'story' && <StoryList stories={stories} onUpdateStory={onUpdateStory} onDeleteStory={onDeleteStory}/>}
              {view === 'bForm' && (
                <>
                  <BookForm
                    onClose={onClose}
                    onBookChange={onBookChange}
                    onSubmit={onSubmitBook}
                    bookField={bookField}
                  />
                  <BookList
                    books={books}
                    onUpdateBook={onUpdateBook}
                    onDeleteBook={onDeleteBook}
                  />
                </>
              )}
              {view === 'sForm' && (
                <>
                  <StoryForm
                    onClose={onClose}
                    onBookIdChange={onBookIdChange}
                    onStoryChange={onStoryChange}
                    onSubmit={onSubmitStory}
                    bookId={bookId}
                    storyField={storyField}
                    books={books}
                  />
                  <StoryList
                    stories={stories}
                    onUpdateStory={onUpdateStory}
                    onDeleteStory={onDeleteStory}
                  />
                </>
              )}
            </ContentCard>
          </Frame>
        </Layout>
        
       
    </div>
  );
}

export default App;
