import React from "react";

type PersonProps = {
  person: Readonly<{
    firstName: string;
    lastName: string;
  }>;
  prefix?: string;
};

function Greeter({ person: person, prefix }: PersonProps) {
  //   person.firstName = "Jack";

  return (
    <div>
      <div>
        {prefix} Hello {person.firstName}
      </div>
      <div>Hello {person.lastName}</div>
    </div>
  );
}

function printText(o?: Partial<typeof defaults>) {
  const defaults = {
    count: 1
  };
}

printText();

export default React.memo(Greeter);
