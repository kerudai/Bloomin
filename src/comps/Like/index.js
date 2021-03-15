import React from 'react';
import styled from 'styled-components';
import LikeButton from 'comps/LikeButton';


const LikeB = styled.button`
border: none;
background: none;
display: flex;
align-items: center;
justify-content: center;
font-size:12px;
`;

const Heart = styled.img`
cursor: pointer;
margin: 5px;
height: 15px;
`;

class Like extends React.Component {

    state = {
        likes: 0
    };

    addLike = () => {
        let newCount = this.state.likes + 1;
        this.setState({
            likes: newCount
        });
    };

    render() {
        return <LikeB onClick ={this.addLike}> 
        <LikeButton /> {this.state.likes}
        </LikeB>
    }
}

export default Like;