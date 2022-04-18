import { useCallback, useMemo } from "react";
import { useDropzone } from 'react-dropzone'

const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out'
  };
  
  const focusedStyle = {
    borderColor: '#2196f3'
  };
  
  const acceptStyle = {
    borderColor: '#00e676'
  };
  
  const rejectStyle = {
    borderColor: '#ff1744'
  };

function Upload({ setFiles, files, type }) {
    // const [convertedFiles, setFiles] = useState([])

    const onDrop = useCallback(acceptedFiles => {
        acceptedFiles.forEach((file) => {
            const reader = new FileReader()
            // setTemp(file)
            reader.onabort = () => console.log('file reading was aborted')
            reader.onerror = () => console.log('file reading has failed')
            reader.readAsDataURL(file)
            reader.onload = () => {
            // Do whatever you want with the file contents
              const binaryStr = reader.result
              const clone = [...files] 
              clone.push({files: binaryStr, title: file.name})
              setFiles(clone)
            }
          })
    }, [files, setFiles])

    const {
        acceptedFiles,
        getRootProps,
        getInputProps,
        isFocused,
        isDragAccept,
        isDragReject
    } = useDropzone({onDrop, multiple: true, maxFiles: 5})

    const style = useMemo(() => ({
        ...baseStyle,
        ...(isFocused ? focusedStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
      }), [
        isFocused,
        isDragAccept,
        isDragReject
    ]);

    // const submitHandler = () => {
    //   console.log("CONVERTED FILES", convertedFiles)
    // }

    const currentFiles = acceptedFiles.map(file => (
        <li key={file.path}>
          {file.path} - {file.size} bytes
        </li>
      ));

    return (
        <div>
            <div>
                <h4>{type}</h4>
                <div {...getRootProps({style})}>
                    <input {...getInputProps()} />
                    <p>Drag and drop a file or click to select a file</p>
                </div>
                <aside>
                    <ul>{currentFiles}</ul>
                </aside>
            </div>
            {/* <button disabled={!convertedFiles} variant="contained" onClick={() => submitHandler()}>Upload</button> */}
        </div>
    );
}

export default Upload;