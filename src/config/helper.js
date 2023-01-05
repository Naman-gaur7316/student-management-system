export default function formatDate() {
    const date = new Date();
    
    return date.toDateString() + " " +  date.toLocaleTimeString();

}