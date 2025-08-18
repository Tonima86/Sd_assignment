import React, { useState } from 'react';


function Articles() {
  const allArticles = [
    { id: 1, title: 'The Art of Storytelling', status: 'Published', lastEdited: '2 days ago' },
    { id: 2, title: 'Crafting Compelling Characters', status: 'Draft', lastEdited: '1 week ago' },
    { id: 3, title: 'Mastering Dialogue', status: 'Published', lastEdited: '2 weeks ago' },
    { id: 4, title: 'World Building 101', status: 'Published', lastEdited: '3 weeks ago' },
    { id: 5, title: 'The Hero\'s Journey', status: 'Published', lastEdited: '1 month ago' },
    { id: 6, title: 'Show Don\'t Tell', status: 'Draft', lastEdited: '5 days ago' },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const articlesPerPage = 3;

  const lastIndex = currentPage * articlesPerPage;
  const firstIndex = lastIndex - articlesPerPage;
  const currentArticles = allArticles.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(allArticles.length / articlesPerPage);

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const getBadgeColor = (status) => {
    return status === 'Published' ? 'green' : 'yellow';
  };

  return (
    <div style={{ 
      display: 'flex', 
      maxWidth: '1200px', 
      margin: '0 auto', 
      padding: '20px' 
    }}>
    
      <div style={{
        width: sidebarOpen ? '250px' : '50px',
        background: '#f8f9fa',
        padding: '10px',
        marginRight: '20px',
        transition: 'width 0.3s ease',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {sidebarOpen ? (
          <>
          
            
            <div style={{margin: '20px 0', padding: '10px', background: '#e9ecef'}}>
  <h3>My Profile</h3>
</div>
      <div style={{margin: '20px 0', padding: '10px', background: '#e9ecef'}}>
  <h4>My Articles</h4>
</div>
            <button 
              onClick={() => setSidebarOpen(false)}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                padding: '5px 10px',
                background: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              ◄
            </button>
          </>
        ) : (
          <button 
            onClick={() => setSidebarOpen(true)}
            style={{
              padding: '5px 10px',
              background: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            ►
          </button>
        )}
      </div>

      
      <div style={{ flex: 1 }}>
        <div style={{ 
          background: 'white', 
          padding: '20px', 
          marginTop: '0',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ marginBottom: '20px' }}>Articles</h2>
          
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#f8f9fa' }}>
                  <th style={{ padding: '10px', textAlign: 'left' }}>Title</th>
                  <th style={{ padding: '10px', textAlign: 'left' }}>Status</th>
                  <th style={{ padding: '10px', textAlign: 'left' }}>Last Edited</th>
                </tr>
              </thead>
              <tbody>
                {currentArticles.map(article => (
                  <tr key={article.id} style={{ borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: '10px' }}>{article.title}</td>
                    <td style={{ padding: '10px' }}>
                      <span style={{ 
                        background: getBadgeColor(article.status),
                        color: article.status === 'Published' ? 'white' : 'black',
                        padding: '3px 8px',
                        borderRadius: '3px',
                        fontSize: '0.9em'
                      }}>
                        {article.status}
                      </span>
                    </td>
                    <td style={{ padding: '10px' }}>{article.lastEdited}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            marginTop: '20px'
          }}>
            <button 
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              style={{ 
                padding: '5px 10px',
                margin: '0 5px',
                background: currentPage === 1 ? '#ccc' : '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '3px',
                cursor: currentPage === 1 ? 'not-allowed' : 'pointer'
              }}
            >
              Previous
            </button>
            
            {Array.from({ length: totalPages }).map((_, index) => {
              const page = index + 1;
              return (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  style={{ 
                    padding: '5px 10px',
                    margin: '0 5px',
                    background: currentPage === page ? '#007bff' : '#f8f9fa',
                    color: currentPage === page ? 'white' : 'black',
                    border: 'none',
                    borderRadius: '3px',
                    cursor: 'pointer'
                  }}
                >
                  {page}
                </button>
              );
            })}
            
            <button 
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              style={{ 
                padding: '5px 10px',
                margin: '0 5px',
                background: currentPage === totalPages ? '#ccc' : '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '3px',
                cursor: currentPage === totalPages ? 'not-allowed' : 'pointer'
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Articles;