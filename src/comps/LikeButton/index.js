import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
cursor: pointer;
border:none;
`;

const Empty = styled.img`
cursor: pointer;
margin: 5px;
height: 15px;
`;

const Full = styled.img`
cursor: pointer;
margin: 5px;
height: 15px;
`;

class LikeButton extends React.Component { 
    state = { liked: false }; 
    toggle = () => { 
      let localLiked = this.state.liked; 
    
      // Toggle the state variable liked 
      localLiked = !localLiked; 
      this.setState({ liked: localLiked }); 
    }; 
    render() { 
      return ( 
        <Container>
          
            <div 
              className="container"
        
              onClick={() => this.toggle()} 
            > 
              {this.state.liked === false ? ( 
                <Empty src="/EmptyLike.png"/>
              ) : ( 
                <Full src="/FillLike.png"/>
              )} 
            </div> 

    </Container>
      ); 
    } 
  }


export default LikeButton;
