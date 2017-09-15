let getPresentAr subject tense => {
  switch subject {
    | "yo" => "o"
    | "tu" =>  "as"
    | "ella" =>  "a"
    | "nosotras" =>  "amos"
    | "vosotras" =>  "áis"
    | "ellas" =>  "an"
    | _ =>  "error"
  }
};

let genPresentEnding ending subject => {
  Js.log("subject", subject);
  switch subject {
    | "yo" => "o"
    | "tu" => switch ending {
      | "ar" => "as"
      | "er" => "es"
      }
    | "ella" => switch ending {
      | "ar" => "a"
      | "er" => "e"
      }
    | "nosotras" =>  "amos"
    | "vosotras" =>  "áis"
    | "ellas" =>  "an"
    | _ =>  "error"
  }
};

let conjugate word info => {
  let start = ( String.length word) - 2;
  let endingType = (String.sub word start 2);
  let stem = (String.sub word 0 start);
  switch info##tense {
    | "present" => stem ^ (genPresentEnding endingType info##subject)
    | "er" => {
        "errrrrr";
      }
  }
};

