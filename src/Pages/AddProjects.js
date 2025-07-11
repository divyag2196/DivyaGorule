import axios from 'axios';
import React, { useRef, useState } from 'react'

function AddProject({fetchProject}) {
    const [title,setTitle]=useState('');
    const[description,setDescription]=useState('');
    const[image,setImage]=useState(null);
    const[stack,setStack]=useState('');
    const[link,setLink]=useState('');
    const fileInputRef = useRef(null);

    const handleForm = (e) =>{
        e.preventDefault();

        if (!title || !description || !stack || !link || !image) {
            alert('Please fill all fields');
            return;
        }

        const formData = new FormData();
        formData.append('title',title);
        formData.append('description',description);
        formData.append('stack',stack);
        formData.append('link',link);
        if (image) formData.append('image', image);

        axios.post('https://divyagoruleportfolio.liveblog365.com/addProjects.php',formData)
        .then((response)=>{
            console.log(response.data);
            if (response.data.status === 'success') {
          alert('Product added successfully');
          fetchProject();  // Refetch the product list after adding
          
          // Clear the input fields after successful addition
          setTitle('');
          setDescription('');
          setStack('');
          setLink('');
          setImage(null); // Clear the image input
            if (fileInputRef.current) {
            fileInputRef.current.value = '';  // <-- reset file input
          }
        } 
        else {
          alert('Error adding project: ' + response.data.message);
        }

        })
        .catch((error) => {
            console.error('Error with POST request:', error);
            alert('Error adding project');
        });
    }
  return (
    <div>
        <section className='bg-white dark:bg-[#111] rounded-[20px] p-6 w-[100%]'>
            <h2 className='text-2xl font-bold'>
              Add Project
            </h2>
            <form onSubmit={handleForm}>
                <div>
                    <label>Project Title:</label>
                    <input type='text' name='title' placeholder='Enter Title of Project' value={title} onChange={(e)=>setTitle(e.target.value)}/>
                </div>
                <div>
                    <label>Project Description:</label>
                    <textarea name='description' placeholder='Enter description of Project' value={description} onChange={(e)=>setDescription(e.target.value)} />
                </div>
                <div>
                    <label>Project Image:</label>
                    <input type='file' accept="image/*" onChange={(e) => setImage(e.target.files[0])} ref={fileInputRef} />   
                </div>
                <div>
                    <label>Project Technology:</label>
                    <input type='text' name='tech_stack' placeholder='Enter Technology of Project(Wordpress/Php/React)' value={stack} onChange={(e)=>{setStack(e.target.value)}}/>
                </div>
                <div>
                    <label>Project Live Link:</label>
                    <input type='text' name='live_link' placeholder='Enter link of Project' value={link} onChange={(e)=>{setLink(e.target.value)}}/>
              
                </div>
                <div>
                    <button style={{padding:'10px',background:'#ccc',marginTop:'20px'}} type="submit">Add Project</button>
                </div>
              
            </form>
          </section>
    </div>
  )
}

export default AddProject