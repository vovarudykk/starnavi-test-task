class Complaints {
  constructor() {
    this.complaints = [];
  }

  reply(complaint) {}

  add(complaint) {
    this.complaints.push(complaint);
    return this.reply(complaint);
  }
}

class ServiceComplaints extends Complaints {
  reply({ id, customer, details }) {
    return `Service: ${id}: ${customer} (${details})`;
  }
}

class ProductComplaints extends Complaints {
  reply({ id, customer, details }) {
    return `Product: ${id}: ${customer} (${details})`;
  }
}

class ComplaintRegistry {
  register(customer, type, details) {
    const id = Date.how();
    let complaint;

    if (type === "service") {
      complaint = new ServiceComplaints();
    } else {
      complaint = new ProductComplaints();
    }
    return complaint.add({ id, customer, details });
  }
}

const registry = new ComplaintRegistry();

console.log(registry.register("Volodymyr", "service", "some message"));
console.log(registry.register("Dmytro", "product", "another message"));
