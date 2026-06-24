function CreateArticle({ onSubmit }) {
  console.log("CreateArticle render");
  return (
    <>
      <h2>Create Article</h2>
      <form
        action=""
        onSubmit={e => {
          e.preventDefault();
          onSubmit(e.target.title.value, e.target.desc.value, e.target.difficulty.value);
        }}
      >
        <div>
          <label htmlFor="title">title</label>
          <input type="text" name="title" id="title" />
        </div>
        <div>
          <label htmlFor="desc">desc</label>
          <textarea name="desc" id="desc"></textarea>
        </div>
        <div>
          <label htmlFor="difficulty">difficulty</label>
          <select name="difficulty" id="difficulty">
            <option value="난이도1">난이도 1</option>
            <option value="난이도2">난이도 2</option>
            <option value="난이도3">난이도3 </option>
          </select>
        </div>
        <button>Submit</button>
      </form>
    </>
  );
}
export default CreateArticle;
