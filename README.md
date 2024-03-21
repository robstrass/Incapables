# Incapables
*By Rob Strasser - [Visit Incapables](https://incapables.herokuapp.com/)*

**Table of Contents**
* [Incapables Overview](#incapables-overview)
* [Technologies Used](#technologies-used)
* [Backend Technology](#backend-technology)
* [Frontend Technology](#frontend-technology)
* [Conclusion](#conclusion)

## Incapables Overview
Incapables is a fullstack app written in Python, React and Node that allows users to write satirical DIY guides for different projects that they have.

Users can view the current projects hosted on the site using the featured section, sorted by category, or by every project on the site.

##### Incapables Homepage
![Incapables Homepage](https://i.ibb.co/SRB43nq/incapables-homepage.png)

##### Incapables utilizes AWS for Image Upload
![Incapables AWS](https://i.ibb.co/z62dFFT/Incapables-upload.png)

## Technologies Used
Incapables utilizes Python on the backend, with SQLAlchemy and Flask, and Docker to hold the container for the app. The database is made with PostgreSQL. Additionally, AWS S3 is used for image hosting to allow users to easily upload images from their computers.

Javascript is used on the frontend in conjunction with React for seemless rendering and Redux for state management.

### Backend Technology
* [Python](https://docs.python.org/3/)
* [SQLAlchemy](https://docs.sqlalchemy.org/en/14/)
* [Flask](https://flask.palletsprojects.com/en/2.0.x/)
* [WTForms](https://wtforms.readthedocs.io/en/2.3.x/)
* [Docker](https://docs.docker.com/)
* [PostgreSQL](https://www.postgresql.org/docs/13/)

#### Code for Integrating AWS Upload
```js
@project_routes.route('/<int:projectId>/images', methods=['POST'])
@login_required
def add_image(projectId):
    form = NewImageForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    project = Project.query.get(int(projectId))

    if "image" not in form.data:
        return {"errors": "image required"}, 400

    image = form.data["image"]

    if not allowed_file(image.filename):
        return {"errors": "file type not permitted"}, 400

    image.filename = get_unique_filename(image.filename)

    upload = upload_file_to_s3(image)

    if "url" not in upload:
        return upload, 400

    url = upload["url"]

    if form.validate_on_submit() and project.user_id == current_user.id:
        image = Image(
            image = url,
            content = form.data['content'],
            project_id = projectId,
            user_id = current_user.id
        )

        db.session.add(image)
        db.session.commit()
        return image.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 400
```

### Frontend Technology
* [React](https://v5.reactrouter.com/web/guides/quick-start)
* [Redux](https://react-redux.js.org/)
* [Node.js](https://nodejs.org/docs/latest-v12.x/api/)

#### Code For Uploading an Image to Steps
```js
export default function AddImage() {
    const dispatch = useDispatch();
    const { projectId } = useParams();

    const [imageFile, setImageFile] = useState('');
    const [savedImageFile, setSavedImageFile] = useState('');
    const [imagePreview, setImagePreview] = useState('');
    const [savedImagePreview, setSavedImagePreview] = useState('');
    const [imageContent, setImageContent] = useState('');
    const [errors, setErrors] = useState('');

    const setImage = (e) => {
        let file = e.target.files[0];

        setImageFile(e.target.files[0]);
        if (file) {
            setSavedImageFile(file);

            file = URL.createObjectURL(file);
            setImagePreview(file);
            setSavedImagePreview(file)
        } else {
            setImageFile(savedImageFile);
            setImagePreview(savedImagePreview);
        }
    }

    const validate = () => {
        const validateErrors = [];

        if (!imageFile) validateErrors.push('image : Please select an image.');
        if (!imageContent) validateErrors.push('content : Please explain your step.');

        return validateErrors;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const errors = validate();

        if (errors && errors.length > 0) {
            return setErrors(errors);
        }

        const formData = new FormData();

        formData.append('content', imageContent);
        formData.append('image', imageFile);
        formData.append('projectId', projectId);

        await dispatch(imageActions.postImageThunk(formData));
        setImageContent('');
        setImageFile('');
        setImagePreview('');
    }

    return (
        <div className={style.addImageContainer}>
            <form
                className={style.addImageForm}
                onSubmit={handleSubmit}
            >
                <h2 className={style.addImageTitle}>
                    Add a Step
                </h2>
                <div className={style.addImageInputDiv}>
                    <label
                        className={style.addImageLabel}
                        htmlFor='addImageFile'
                    >
                        {imagePreview ?
                        <img
                            src={imagePreview}
                            className={style.addImagePreview}
                        />
                        : <span className="material-icons addImagePreviewSpan"
                            style={{'fontSize':'48px'}}
                        >
                            cloud_upload
                        </span>}
                        <div className={style.addImageError}>
                        {errors.length > 0 &&
                            errors.map((error) => error.includes("image"))
                                ? errors.map((error) =>
                                    error.includes("image")
                                    ? `${error.split(":")[1]}`
                                    : null
                                )
                                : null}
                        </div>
                    </label>
                    <input
                        className={style.addImageInput}
                        id='addImageFile'
                        type='file'
                        accept='.jpg, .jpeg, .png, .gif'
                        onChange={setImage}
                    />
                </div>
                <div className={style.addImageInputDiv}>
                    <div className={style.addImageError}>
                    {errors.length > 0 &&
                        errors.map((error) => error.includes("content"))
                            ? errors.map((error) =>
                                error.includes("content")
                                ? `${error.split(":")[1]}`
                                : null
                            )
                            : null}
                    </div>
                    <textarea
                        className={style.addImageTextArea}
                        placeholder='Add a step...'
                        value={imageContent}
                        onChange={(e) => setImageContent(e.target.value)}
                    />
                </div>
                <button
                    className={style.addImageButton}
                >
                    Add Step
                </button>
            </form>
        </div>
    )
}
```

## Conclusion
On a personal note, Incapables was a super fun project to build. I'm an extremely sarcastic person, so being able to build a project around sarcasm was a great way to bring in my own personal flare.

I fell in love with Javascript as I began learning it, but I really wanted to challenge myself on this project. Python was a difficult shift for me coming from Javascript, so I wanted to build out the backend for Incapables in Python to better understand what Python was capable of.
