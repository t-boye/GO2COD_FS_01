// src/App.js
import React, { useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import { useDispatch } from 'react-redux';
import { fetchAllBlogPosts } from './actions/blogPosts';
import BlogPosts from './components/BlogPosts';
import BlogPostsForm from './components/BlogPostsForm';
import Header from './components/Header';
import Footer from './components/Footer';

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught in Error Boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllBlogPosts());
  }, [dispatch]);

  return (
    <ErrorBoundary>
      <div className="App">
        <Header />
        <Container maxWidth="xl">
          <AppBar position="static" color="inherit">
            <Typography variant="h2" align="center">UPDATED NEWS BLOG</Typography>
          </AppBar>
          <Grow in>
            <Grid container justifyContent="space-between" alignItems="stretch" spacing={2}>
              <Grid item xs={12} sm={3}>
                <BlogPostsForm />
              </Grid>
              <Grid item xs={12} sm={9}>
                <BlogPosts />
              </Grid>
            </Grid>
          </Grow>
        </Container>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;