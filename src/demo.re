/* 
   Goal: 
     conjugate('estudiar', { tense: 'present', subject: 'ella' });
       should return estudia
 */

type ending = 
| Ar
| Er
| Ir;

module Subject = {
  /* The type name becomes just `t` to avoid repetition when accessed from outside the module */
  /*
   * To do:
   * 1) Conjugation w/ gender
   * 2) Fix other inputs into info to have gender
   * 3) Typing Singular / plural
   */
  
  type t =
    | Yo
    | Tu
    | Ella
    | Nosotras
    | Vosotras
    | Ellas;
  let ofString = 
    fun
    | "yo" => Yo
    | "tu" => Tu
    | "ella" => Ella
    | "nosotras" => Nosotras
    | "vosotras" => Vosotras
    | _ => Ellas
};

module Ending = {
 /*
  * Properties:
  *   t: gives the simple type in Reason
  */
  type t =
    | Ar
    | Er
    | Ir;
  let ofString = 
    fun
    | "ar" => Ar
    | "er" => Er
    | _ => Ir
};

let genPresentEnding ending subject => {
  switch (subject:Subject.t, ending:Ending.t) {
    | (Yo, _) => "o"
    | (Tu, Ar) => "as"
    | (Tu, _) => "es"
    | (Ella, Ar) => "a"
    | (Ella, _) => "e"
    | (Nosotras, _) => "amos"
    | (Vosotras, _) => "\195\161s"
    | (Ellas, _) => "an"
  }
};

let genFutureEnding ending subject => {
  switch (subject:Subject.t, ending:Ending.t) {
    | (Yo, _) => "\130"
    | (Tu, _) => "\160s"
    | ()
  }
}; 

let conjugate word info => {
  let start = ( String.length word ) - 2;
  let endingType = Ending.ofString (String.sub word start 2);
  let stem = (String.sub word 0 start);
  let subjectType = Subject.ofString info##subject;
  switch info##tense {
    | "present" => stem ^ (genPresentEnding endingType subjectType)
    //| "future" => word ^ (genFutureEnding endingType subjectType)
  }
};

