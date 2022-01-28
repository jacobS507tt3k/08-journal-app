import React from 'react';
import { NotesAppBar } from './NoteAppBar';

export const NoteScreen = () => {
  return (
            <div 
            className="notes__main-content"
            >
                <NotesAppBar/>
                <div className="notes__content">
                    <input 
                        type="text" 
                        placeholder="Some awesome title"
                        className="notes__title-input"
                        autocomplete="off"
                    />

                    <textarea 
                        placeholder="What happened today"
                        className="notes__textarea"
                    >
                    </textarea>

                    <div className="notes__image">
                        <img 
                            src="https://www.speeli.com/wp-content/uploads/2020/06/Why-some-people-hate-Interstellar.jpg"
                            alt="imagen interestellar"
                        />
                    </div>
                </div>
            </div>

            
        );
};
