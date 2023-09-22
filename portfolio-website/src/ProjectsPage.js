import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


export default function Project() {
    const sourceCodeButtonStyle = {
        fontFamily: 'Arial, sans-serif',
        backgroundColor: 'transparent',
        color: 'black',
        padding: '0.25rem 0.5rem',
        outline: 'none',
        cursor: 'pointer',
        border: 'none',
        transition: 'color 0.3s ease',
    };

    const liveButtonStyle = {
        fontFamily: 'Arial, sans-serif',
        backgroundColor: 'transparent',
        color: 'black',
        padding: '0.25rem 0.5rem',
        outline: 'none',
        cursor: 'pointer',
        border: 'none',
        transition: 'color 0.3s ease',
    };

    const cardTitleStyle = {
        fontFamily: 'Arial, sans-serif',
        fontSize: '28px',
        color: 'black',
    };

    const cardParaStyle = {
        fontFamily: 'Arial, sans-serif',
        fontSize: '16px',
        color: 'black',
    };

    return (
        <div className="container-fluid custom-background">

            <div className="container pt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card custom-color">
                            <img src=".\img\tictactoe.jpg" className="card-img-top" alt="Tic Tac Toe" />
                            <div className="card-body">
                                <h5 className="card-title" style={cardTitleStyle}>Tic Tac Toe</h5>
                                <p className="card-text" style={cardParaStyle}>One of our many tasks was to create a game of Tic Tac Toe! </p>
                                <a href="https://github.com/Mjtoffey/TicTacToe" className="btn mr-2" style={sourceCodeButtonStyle} target="_blank" rel="noopener noreferrer">Source Code</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container pt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card custom-color">
                            <img src=".\img\ShyGuyFry.jpg" className="card-img-top" alt="Shy Guy's Fries" />
                            <div className="card-body">
                                <h5 className="card-title" style={cardTitleStyle}>Shy Guy's Fries</h5>
                                <p className="card-text" style={cardParaStyle}>Shy Guy's Fries is a mach restaurant menu application designed using React. Using an API call and various array methods I was tasked to set a menu with different items and pages.</p>
                                <a href="https://github.com/Mjtoffey/reactRestaurant" className="btn mr-2" style={sourceCodeButtonStyle} target="_blank" rel="noopener noreferrer">Source Code</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container pt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card custom-color">
                            <img src=".\img\SQLheroes.jpg" className="card-img-top" alt="SQL Heros" />
                            <div className="card-body">
                                <h5 className="card-title" style={cardTitleStyle}>SQL Heros</h5>
                                <p className="card-text" style={cardParaStyle}>SQL Heros was the project that introduced us to SQL. Using the CRUD methodology you can create your own super heroes and track their data!</p>
                                <a href="https://github.com/Mjtoffey/SQL-SuperHeroes" className="btn mr-2" style={sourceCodeButtonStyle} target="_blank" rel="noopener noreferrer">Source Code</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}