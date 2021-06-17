import "./App.css";
import Question from "./components/Question/Question";
import CategoryList from "./components/CategoryList/CategoryList";
import QuestionByCategoryList from "./components/QuestionByCategoryList/QuestionByCategoryList";
import QuestionList from "./components/QuestionList/QuestionList";

function App() {
  return (
    <div>
      <Question />
      <CategoryList />
      <QuestionByCategoryList />
      <QuestionList />
    </div>
  );
}

export default App;
