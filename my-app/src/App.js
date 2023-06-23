import Card from "./components/Card";
import image1 from './images/user.png'
import image2 from './images/images (1).png'
import image3 from './images/vector-users-icon.jpg'
const card = {
    user1: {
        img: image1,
        title: 'John',
        subtitle: 'Frontend',
        button: 'Click'
    },
    user2: {
        img: image2,
        title: 'Oleg',
        subtitle: 'Backend',
        button: 'Click'
    },
    user3: {
        img: image3,
        title: 'Andrey',
        subtitle: 'Ui-Ux',
        button: 'Click'
    }
}

const showAlert1 = () => alert(card.user1.title)
const showAlert2 = () => alert(card.user2.title)
const showAlert3 = () => alert(card.user3.title)

 function App(){
    return (
        <>
            <Card pr={card.user1} fc={showAlert1}/>
            <Card pr={card.user2} fc={showAlert2}/>
            <Card pr={card.user3} fc={showAlert3}/>
        </>
    )
}

export default App
