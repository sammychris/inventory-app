import React from 'react';
import Header from '../components/Header';
import DataCard from '../components/DataCard';
import Layout from '../components/Layout';
import Frame from '../components/Frame';
import ProfileCard from '../components/ProfileCard';
import ContentCard from '../components/ContentCard';
import Button from '../components/Button';
import BookForm from '../components/BookForm';
import StoryForm from '../components/StoryForm';
import BookList from '../components/BookList';
import StoryList from '../components/StoryList';
import Login from '../components/Login';
import Register from '../components/Register';
import { useDispatch, useSelector } from 'react-redux';
import {
  setUser,
  setBooks,
  setStories,
  setGuest,
  setView,
  setPage, 
  setBookField,
  setBookId,
  setStoryField,
  setStoryId 
} from '../reducers';



function App() {
  const dispatch = useDispatch();
  const {
    user,
    books,
    stories,
    guest,
    view,
    page,
    bookField,
    bookId,
    storyField,
    storyId
  } = useSelector(state => state.inventory);

  const onBookChange = (e) =>  dispatch(setBookField(e.target.value));
  const onBookIdChange = (e) =>  dispatch(setBookId(e.target.value));
  const onStoryChange = (e) =>  dispatch(setStoryField(e.target.value));
   
  const onSubmitBook = () => {
    if (!bookField) return alert('Enter a book name');
    const catIndex = books.findIndex(item => item.id === bookId);
    if (catIndex === -1) {
      const id = books.length;
      const newBooks = [...books, { id, book: bookField }];
      dispatch(setBooks(newBooks));
    } else {
      const newBooks = JSON.parse(JSON.stringify(books));
      newBooks[catIndex].book = bookField;
      dispatch(setBooks(newBooks));
    }
    dispatch(setBookField(''));
    dispatch(setBookId(''));
    dispatch(setStoryField(''));
    dispatch(setView('book'));
  };

  const onSubmitStory = () => {
    if (!bookId) return alert('Select a book');
    if (!storyField) return alert('Enter a story');
    const itemIndex = stories.findIndex(item => item.id === storyId);
    if(itemIndex === -1) {
      const id = stories.length;
      const newStories = [ ...stories, { id, bookId, story: storyField } ];
      dispatch(setStories(newStories));
    } else {
      const newStories = JSON.parse(JSON.stringify(stories));
      newStories[itemIndex].bookId = bookId;
      newStories[itemIndex].story = storyField;
      dispatch(setStories(newStories));
    }
    dispatch(setBookField(''));
    dispatch(setBookId(''));
    dispatch(setStoryField(''));
    dispatch(setView('story'));
  };

  const onBookForm = () => {
    dispatch(setView('bForm'));
  }

  const onStoryForm = () => {
    dispatch(setView('sForm'));
  }

  const onClose = () => {
    dispatch(setView('story'));
    dispatch(setBookField(''));
    dispatch(setBookId(''));
    dispatch(setStoryField(''));
  }

  const onViewBooks = () => {
    dispatch(setView('book'));
    dispatch(setBookField(''));
    dispatch(setBookId(''));
    dispatch(setStoryField(''));
  }

  const onViewStories = () => {
    dispatch(setView('story'));
    dispatch(setBookField(''));
    dispatch(setBookId(''));
    dispatch(setStoryField(''));
  }

  const onUpdateStory = (item) => {
    dispatch(setStoryId(item.id));
    dispatch(setBookId(item.bookId));
    dispatch(setStoryField(item.story));
    dispatch(setView('sForm'));
  }

  const onUpdateBook = (item) => {
    dispatch(setBookId(item.id));
    dispatch(setBookField(item.book));
    dispatch(setView('bForm'));
  }

  const onDeleteBook = (item) => {
    const filterData = books.filter(book => book.id !== item.id);
    dispatch(setBooks(filterData));
  }

  const onDeleteStory = (item) => {
    const filterData = stories.filter(story => story.id !== item.id);
    dispatch(setStories(filterData));
  }

  const onLogout = (e) => {
    e.preventDefault();
    dispatch(setUser({...user, isLogin: false}));
    dispatch(setPage('login'));
  }

  const onChangePage = (page) => {
    dispatch(setPage(page));
  }

  const onHandleGuest = (e) => {
    const {name, value} = e.target;
    dispatch(setGuest({...guest, [name]: value}));
  }

  const onSaveUser = (e) => {
    e.preventDefault()
    if (!validStr(guest.name)) return alert('Name cannot be empty');
    if (!validStr(guest.email)) return alert('Email cannot be empty');
    if (validStr(guest.password).length < 8) return alert('Password must not be less than 8 characters');
    if (validStr(guest.password) !== validStr(guest.confirmPassword)) return alert('Password and confirm password must be the same!');
    dispatch(setUser({...guest}));
    alert('Register Successfully!');
    dispatch(onChangePage('login'))
  }

  const onLogin = (e) => {
    e.preventDefault();
    if (validStr(guest.email) !== validStr(user.email)) return alert('User not recognize!');
    if (validStr(guest.password) !== validStr(user.password)) return alert('Password does not match!');
    dispatch(setUser({...user, isLogin: true}));
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
          <ProfileCard user={user} onLogout={onLogout}/>
          <Frame>
            <DataCard title="Books" count={books.length} />
            <DataCard title="Stories" count={stories.length} />
            <ContentCard>
              <Button event={onBookForm}>Create Book</Button>
              <Button event={onStoryForm}>Create Story</Button>
              <div>
                <Button event={onViewBooks} size="small" cls={view === 'book' | view === 'bForm' && "active"}>Books</Button>
                <Button event={onViewStories} size="small" cls={view === 'story' | view === 'sForm' && "active"}>Stories</Button>
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
