/* 
   Goal: 
     conjugate('estudiar', { tense: 'present', subject: 'ella' });
       should return estudia
 */

module Subject = {
  /* 
     The type name becomes just `t` to avoid repetition when 
     accessed from outside the module 
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
    | (Nosotras, Ar) => "amos"
    | (Nosotras, Er) => "emos"
    | (Nosotras, _) => "imos"
    | (Vosotras, Ar) => {js|áis|js}
    | (Vosotras, Er) => {js|éis|js}
    | (Vosotras, _) => {js|ís|js}
    | (Ellas, _) => "an"
  }
};
let genFutureEnding ending subject => {
  switch (subject:Subject.t, ending:Ending.t) {
    | (Yo, _) => {js|é|js} 
    | (Tu, _) => {js|é|js} 
    | (Ella, _) => {js||js}
    | (Nosotras, _) => "emos" 
    | (Vosotras, _) => {js|á|js} 
    | (Ellas, _) => {js|án|js} 
    }
}; 

let conjugate word info => {
  let start = ( String.length word ) - 2;
  let endingType = Ending.ofString (String.sub word start 2);
  let stem = (String.sub word 0 start);
  let subjectType = Subject.ofString info##subject;
  switch info##tense {
    | "present" => stem ^ (genPresentEnding endingType subjectType)
    | "future" => word ^ (genFutureEnding endingType subjectType)
  }
};


