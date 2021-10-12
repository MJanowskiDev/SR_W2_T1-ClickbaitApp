import React from 'react';

function App() {
  const tileBgColor = '#3e3e3e';
  const tileHeaderColor = '#e74c3c';

  const styles = {
    mainDiv: { padding: 20, fontFamily: '"Monaco", monospace' },
    mainHeader: { textAlign: 'center', color: tileBgColor },
    tileDiv: {
      margin: 6,
      padding: 15,
      borderRadius: 6,
      border: `2px solid ${tileBgColor}`,
    },
    tileIntro: { color: tileBgColor },
    tileHeader: { color: tileHeaderColor, letterSpacing: '1px' },
  };

  const posts = [
    {
      id: 1,
      title: 'Pilne: Co to był za dzień!',
      intro: 'Tego świat jeszcze nie widział',
    },
    {
      id: 2,
      title: 'Wszyscy zazdroszą Polakom!',
      intro: 'Takiego clickbajtowego tytułu jeszcze nikt nie wymyślił',
    },
    {
      id: 3,
      title: 'Adam Małysz Zgolił wąs',
      intro:
        'Po przegranym zakładzie z Piotrem Żyłą nasz mistrz olimpijski zgolił wąsy',
    },
  ];

  const textTrim = (text, maxLen = 25) => {
    if (text.length >= maxLen) {
      return `${text.slice(0, maxLen)}...`;
    } else {
      return text;
    }
  };

  const BlogTile = ({ data }) => {
    const { title, intro } = data;
    return (
      <div style={styles.tileDiv}>
        <h2 style={styles.tileHeader}>{title}</h2>
        <p style={styles.tileIntro}>{textTrim(intro)}</p>
      </div>
    );
  };

  return (
    <div style={styles.mainDiv}>
      <h1 style={styles.mainHeader}>ClickbaitApp</h1>
      {posts.map((post) => (
        <BlogTile key={post.id} data={post} />
      ))}
    </div>
  );
}

export default App;
