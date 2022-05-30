import React, {useState} from 'react'

function ControlledFormHooks() {
    const [nameField, setName] = useState('');
    const [selectCategory, setCategory] = useState('Website');
    const [textComment, setComment] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(nameField, selectCategory, textComment);
        setName('');
        setCategory('Website')
        setComment('');
    }
    return (
        <div>
            <h2>Please fill out the form:</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name-field">Your Name: </label>
                    <input type="text" id="nameField" name="name" onChange={(e) => setName(e.target.value)} value={nameField}></input>
                </div>
                <br/>
                <div>
                    <label htmlFor="select-category">Select a category: </label>
                    <select id="selectCategory" onChange={(e) => setCategory(e.target.value)} value={selectCategory}>
                        <option>Website</option>
                        <option>Order</option>
                        <option>Inquiry</option>
                    </select>
                </div>
                <br/>
                <div>
                    <label htmlFor="textarea-comment">Comment: </label>
                    <textarea id="textComment" name="comment" onChange={(e) => setComment(e.target.value)} value={textComment}/>
                </div>
                <br/>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    )
}

export default ControlledFormHooks