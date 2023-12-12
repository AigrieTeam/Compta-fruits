import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function RecentSales() {
  const details = [
    {
      name: "Olivia Martin",
      email: "olivia.martin@email.com",
      avatar: "/avatars/01.png",
      amount: "+$1,999.00",
    },
    {
      name: "Jackson Lee",
      email: "jackson.lee@email.com",
      avatar: "/avatars/02.png",
      amount: "+$39.00",
    },
    {
      name: "Isabella Nguyen",
      email: "isabella.nguyen@email.com",
      avatar: "/avatars/03.png",
      amount: "+$299.00",
    },
    {
      name: "William Kim",
      email: "william.kim@email",
      avatar: "/avatars/04.png",
      amount: "+$99.00",
    },
    {
      name: "Sofia Davis",
      email: "sofia.davis@email.com",
      avatar: "/avatars/05.png",
      amount: "+$39.00",
    },
  ];

  return (
    <div className="space-y-8">
      {details.map((detail) => (
        <div key={detail.email} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={detail.avatar} alt="Avatar" />
            <AvatarFallback>
              {detail.name.split(" ").map((n) => n[0])}
            </AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{detail.name}</p>
            <p className="text-muted-foreground text-sm">{detail.email}</p>
          </div>
          <div className="ml-auto font-medium">{detail.amount}</div>
        </div>
      ))}
    </div>
  );
}
