import React  from "react";
import 'tachyons';
import Nav from "./Nav";

function StaffingResource(props){
    return (<div>
              <Nav/>
<article className="center mw5 mw6-ns hidden ba mv4">
            <h1 className="f4 bg-near-black white mv0 pv2 ph3">Staffing Resource Form </h1>
            <div clasNames="pa3 bt">
                <form className="pa4 black-80">
                    <div className="measure">
                        <label htmlFor="name" className="f6 b db mb2">Name </label>
                        <input id="name" onChange={props.handleChange} name="name"  className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" value={props.name}/>
                    </div>

                    <div className="measure">
                        <label htmlFor="Upload Resume" className="f6 b db mb2">Upload Resume </label>
                        <input id="resume" onChange={props.handleFileChange} name="resume"  className="input-reset ba b--black-20 pa2 mb2 db w-100" type="file" aria-describedby="name-desc" value=""/>
                    </div>
                    
                     <div className="measure">
                        <fieldset id="favorite_movies" class="bn">
                            <legend class="fw7 mb2">Choose preferred technologies</legend>
                            <div class="flex items-center mb2">
                            <input class="mr2" onChange={props.handleTechChange} type="checkbox" id="c++" value="c++"/>
                            <label for="c++" class="lh-copy">c++</label>
                            </div>
                            <div class="flex items-center mb2">
                            <input class="mr2" onChange={props.handleTechChange}  type="checkbox" id="python" value="python"/>
                            <label for="python" class="lh-copy">python</label>
                            </div>
                            <div class="flex items-center mb2">
                            <input class="mr2" onChange={props.handleTechChange}  type="checkbox" id="javascript" value="javascript"/>
                            <label for="javascript" class="lh-copy">javascripts</label>
                            </div>
                            <div class="flex items-center mb2">
                            <input class="mr2" onChange={props.handleTechChange}  type="checkbox" id="c#" value="c#"/>
                            <label for="c#" class="lh-copy">c#</label>
                            </div>
                            <div class="flex items-center mb2">
                            <input class="mr2" onChange={props.handleTechChange}  type="checkbox" id="java" value="java"/>
                            <label for="java" class="lh-copy">Java</label>
                            </div>
                            <div class="flex items-center mb2">
                            <input class="mr2"onChange={props.handleTechChange}   type="checkbox" id="kotlin" value="kotlin"/>
                            <label for="kotlin" class="lh-copy">kotlin</label>
                            </div>
                        </fieldset>
                    </div> 
                    <div className="measure">
                                <button  onClick={props.handleSubmit} className="f6 link dim br2 ph3 pv2 mb2 dib white bg-black" > Submit </button>
                    </div>
                </form>
            </div>
        </article>
    </div>)
}

export default StaffingResource;