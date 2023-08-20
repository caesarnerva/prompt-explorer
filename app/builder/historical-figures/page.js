import Prompt from '../../../components/prompt'

export default function HistoricalFigures () {
  return(
    <main class="p-12">
      {/* <Prompt mainField={`Who do you want to talk to?`}/> */}
      <form>
        <div class="text-fields-wrapper flex flex-col md:flex-row gap-4">
          <div class="text-field flex flex-col gap-2">
            <label for="historical-figure">Who do you want to talk to?</label>
            <input type="text" name="historical-figure" id="historical-figure" required />
          </div>
          <div class="text-field flex flex-col gap-2">
            <label for="topic">What do you want to talk about?</label>
            <input type="text" name="topic" id="topic" required />
          </div>
        </div>
        
        
        
      </form>
    </main>
  )
}