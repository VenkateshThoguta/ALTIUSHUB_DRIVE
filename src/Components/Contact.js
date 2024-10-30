import React from "react";

const Contact=()=>{
  return (

    <div>
        <form action="mailto:venkateshthoguta@gmail.com" method="POST" encType="text/plain" name="email">
            <div>
                <label>Modda</label>
                <input type="text" name="name"/>
            </div>
            <div>
              <label>
                message
              </label>
              <textarea typeof="text" name="mes"></textarea>
            </div>
            <input type="submit" value="bn"/>
        </form>
    </div>
  )
}
export default Contact
