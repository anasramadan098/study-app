import  express  from "express";
import bodyParser from "body-parser";
import fs from 'fs'; 
// Create Express App
const app = express();

// Use Express MiddleFire
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json())
app.use(express.static('public'));


// Get The Home Page
app.get('/',(req,res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.post('/add-content',(req,res) => {
    const data = req.body
    // Get And Read The File Of The Subject
    
    // Get
    const subject = data.subjectName
    
    // Read
    const subjectFileData = JSON.parse(fs.readFileSync(`./public/files/${subject}.json`,'utf-8'));
    
    // Get The True Unit  From The Data
    const unit = subjectFileData.filter(obj => { 
        return obj.unitName == data.unitSelection
    })

    // Add Lesson And His Content 
    
    // Add Lesson
    unit[0].Lessons.push(data.lessonName);
    
    // Add Content
    unit[0].content[data.lessonName] = data.lessonContent;


    // Create New Object
    const newData = subjectFileData.filter(obj => obj != unit[0]);
    newData.push(unit[0]);


    // Write The New Data To The File
    fs.writeFileSync(`./public/files/${subject}.json`,JSON.stringify(newData));
    res.redirect(`./subjects/${subject}/index.html`);
})
const subjects = [
    `arabic`,
    `computer`,
    `english`,
    `french`,
    `Islam_religion`,
    `National_Education`,
    `retal`
]
// Edit Req
app.get('/edit/:subjectName/:lesson',(req,res) => {
    const subjectName = req.params.subjectName
    const lessonName = req.params.lesson
    if (subjects.includes(req.params.subjectName)) {
        
        // Read
        const subjectFileData = JSON.parse(fs.readFileSync(`./public/files/${subjectName}.json`,'utf-8'));
        
        // Loop On Data To Check The Lesson
        subjectFileData.forEach(object => {
            if (object.Lessons.includes(lessonName)) {

                // Get The Content
                const content = object.content[lessonName];
                // Set HTML  Code
                const htmlCode = `<!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Edit</title>
                    <link rel="stylesheet" href="../main.css">
                </head>
                <body>
                    <h1 class="title">Edit Content</h1>
                    <form action="/edit" method="post">
                        <input type="text" name="subjectName" hidden value="${subjectName}">
                        <input type="text" name="lessonName" hidden value="${lessonName}">
                        <textarea name="lessonContent">${content}</textarea>
                        <input type="submit" value="Submit">
                    </form>
                    <script src="https://cdn.tiny.cloud/1/z8v62mslqg7upmx8e238jzphycdj659fshmgc3j4dwfkr5e5/tinymce/6/tinymce.min.js" referrerpolicy="origin"></script>
                    <script>
                        tinymce.init({
                            selector: 'textarea',
                            plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
                            toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
                        });
                    </script>
                </body>
                </html>`

                res.send(htmlCode)
            } else {
                res.send('Check The Lesson Name !');
            }
        });
        // HTML Code

    } else {
        res.send('Not Found ! . Please Write The Subject Name Correctly');
    }
})


// Uptade The Uptades 
app.post('/edit',(req,res) => {
    const data = req.body;

    // Get The Data From File
    const subjectFileData = JSON.parse(fs.readFileSync(`./public/files/${data.subjectName}.json`,'utf-8'));
    // Filter The Lessons

    res.send(data);
})


app.listen('3000' , ()=> {
    console.log('LISTENED ON 3000 PORT');
})